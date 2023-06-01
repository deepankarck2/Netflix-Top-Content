import numpy as np
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from sqlalchemy import create_engine
import re
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from string import punctuation

def rt_url(title):
    name = r'.+(?=:)'
    na = re.search(name,title)
    new = na.group(0).translate(str.maketrans('', '', punctuation))
    l = re.sub('\s','_',new).lower()

    
    num = r'\d+$'
    n = re.search(num,title)
    if n ==None:
        return 'https://www.rottentomatoes.com/tv/'+ l

    
    nu = n.group(0)
    link ='https://www.rottentomatoes.com/tv/'+ l +'/s0' + nu
    return link

path = "chromedriver.exe"
driver = webdriver.Chrome(path)
#change Password to actual password. same with endpoint
engine = create_engine("mysql://admin:eBvB6C5DsTKhvH3@dashboard.clp7thkncvuh.us-east-2.rds.amazonaws.com:3306/netflix")
test = pd.read_sql_query('select TV from netflixTopTv10',engine)
tvs = test['TV'].to_list()
print(tvs)
c = 1
nump = np.array([])
rt_url(tvs[0])
for show in tvs:
    rotten = rt_url(show)
    print(rotten)
    driver.get(rotten)
    time.sleep(5)
    audience = driver.find_element(By.CSS_SELECTOR,'#topSection score-board').get_attribute('audiencescore')
    tomatometer = driver.find_element(By.CSS_SELECTOR,'#topSection score-board').get_attribute('tomatometerscore')
    if audience == '':
        audience = None
    if tomatometer == '':
        tomatometer = None
    print(audience,tomatometer)
    time.sleep(5)
    if c == 1:
        nump = np.hstack((nump,np.array([show,audience,tomatometer])))
        c += 1
    else:
        nump = np.vstack((nump,np.array([show,audience,tomatometer])))
        c += 1
driver.quit()


df = pd.DataFrame(nump,columns = ['TV','audience_score','tomatometer'])
df = df.astype({"TV":'category', "audience_score":'Int64','tomatometer':'Int64'})
# Read the 'netflixTopTv10' table into a DataFrame
df_netflix = pd.read_sql('netflixTopTv10', engine)
# Create a mapping between tv names and ids
tv_id_mapping = dict(zip(df_netflix['TV'], df_netflix['id']))
# Map the tv in 'gptTv' DataFrame to their ids
df['fk_id'] = df['TV'].map(tv_id_mapping )  
df['fk_id'] = df['fk_id'].astype('int')
# Start the rank from 1 & Rename the index col:
df.index = df.index + 1
df.index.names = ['rank']
# insert to database
df.to_sql('rottenTomatoesTv', con=engine, if_exists='replace')
