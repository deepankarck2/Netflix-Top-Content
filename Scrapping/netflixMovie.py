import numpy as np
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from sqlalchemy import create_engine

url = 'https://top10.netflix.com/films'
path = "chromedriver.exe"
driver = webdriver.Chrome(path)
driver.get(url)

table = driver.find_element(By.XPATH, '//*[@id="weekly-lists"]/div/div[5]/div/div[1]/div/table')
rows = table.find_elements(By.TAG_NAME,'tr')

c = 1
nump = np.array([])
for row in rows[1:]:
    name = row.find_element(By.XPATH,'//*[@id="weekly-lists"]/div/div[5]/div/div[1]/div/table/tbody/tr['+(str(c))+']/td[2]')
    weeks = row.find_element(By.XPATH,'//*[@id="weekly-lists"]/div/div[5]/div/div[1]/div/table/tbody/tr['+(str(c))+']/td[3]')
    hours = row.find_element(By.XPATH,'//*[@id="weekly-lists"]/div/div[5]/div/div[1]/div/table/tbody/tr['+(str(c))+']/td[4]')
    if c == 1:
       nump = np.hstack((nump,np.array([name.text,weeks.text,hours.text]))) 
       c += 1
    else:
        nump = np.vstack((nump,np.array([name.text,weeks.text,hours.text])))
        c += 1


driver.quit()
df = pd.DataFrame(nump,columns = ['Movie','weeksTop10','hoursViewed'])
df = df.astype({"Movie":'category', "weeksTop10":'int64','hoursViewed':'object'})
print(df.dtypes)
df.index.names = ['rank']
#change Password to actual password. same with endpoint
engine = create_engine("mysql://admin:Password@endpoint:3306/netflix")
df.to_sql('netflixTopMovie10', con=engine, if_exists='replace')
engine.execute('alter table netflixTopMovie10 add id int primary key auto_increment')
