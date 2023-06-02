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
from selenium.webdriver.common.keys import Keys

def rt_url(title):
    new = title.translate(str.maketrans('', '', punctuation))
    l = re.sub('\s','_',new).lower()
    return 'https://www.rottentomatoes.com/m/'+ l
    

path = "chromedriver.exe"
driver = webdriver.Chrome(path)
#change Password to actual password. same with endpoint
engine = create_engine("mysql://admin:{MYSQL_PASSWORD}@{MYSQL_HOST}:3306/netflix")
test = pd.read_sql_query('select Movie from netflixTopMovie10',engine)
tvs = test['Movie'].to_list()
print(tvs)
c = 1
nump = np.array([])
rt_url(tvs[0])
for show in tvs:
    rotten = rt_url(show)
    print(rotten)
    driver.get(rotten)   
    time.sleep(5)
    try:
        audience = driver.find_element(By.CSS_SELECTOR,'#topSection score-board').get_attribute('audiencescore')
        tomatometer = driver.find_element(By.CSS_SELECTOR,'#topSection score-board').get_attribute('tomatometerscore')
    except:
        driver.get("http://www.google.com")
        google = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.NAME, "q")))
        google.send_keys(show + " rotten tomatoes")
        time.sleep(5)
        google.send_keys(Keys.ENTER)
        result = driver.find_element(By.CSS_SELECTOR,'.LC20lb.MBeuO.DKV0Md')
        result.click()       
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


df = pd.DataFrame(nump,columns = ['Movie','audience_score','tomatometer'])
df = df.astype({"Movie":'category', "audience_score":'Int64','tomatometer':'Int64'})
print(df)
# Read the 'netflixTopTv10' table into a DataFrame
df_netflix = pd.read_sql('netflixTopMovie10', engine)
# Create a mapping between tv names and ids
tv_id_mapping = dict(zip(df_netflix['Movie'], df_netflix['id']))
# Map the tv in 'gptTv' DataFrame to their ids
df['fk_id'] = df['Movie'].map(tv_id_mapping )  
df['fk_id'] = df['fk_id'].astype('int')
# Start the rank from 1 & Rename the index col:
df.index = df.index + 1
df.index.names = ['rank']
# insert to database
df.to_sql('rottenTomatoesMovie', con=engine, if_exists='replace')

