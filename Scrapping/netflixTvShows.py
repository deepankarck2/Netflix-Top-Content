import numpy as np
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from sqlalchemy import create_engine
from credentials import MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_DATABASE
from sqlalchemy import MetaData, Table, DDL

url = 'https://top10.netflix.com/tv'
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
df = pd.DataFrame(nump,columns = ['TV','weeksTop10','hoursViewed'])
df = df.astype({"TV":'category', "weeksTop10":'int64','hoursViewed':'object'})
print(df.dtypes)
df.index.names = ['rank']
df.index = df.index + 1

#change password to actual password. same with endpoint
#engine = create_engine("mysql://admin:Password@endpoint:3306/netflix")
db_link = f"mysql://admin:{MYSQL_PASSWORD}@{MYSQL_HOST}:3306/netflix" 
engine = create_engine(db_link)

df.to_sql('netflixTopTv10', con=engine, if_exists='replace')

metadata = MetaData()

with engine.connect() as connection:
    netflixTopMovie10 = Table('netflixTopMovie10', metadata, autoload_with=engine)
    query = DDL('ALTER TABLE netflixTopTv10 ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY')
    connection.execute(query)
