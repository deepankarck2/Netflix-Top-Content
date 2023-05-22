import numpy as np
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from sqlalchemy import create_engine, text
import time
from credentials import MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_DATABASE
import re
from sqlalchemy import MetaData, Table, DDL

def get_imdb_id(link):
    # Pattern for IMDb ID: starts with 'tt' and is followed by 7 or more digits
    pattern = r"(tt\d{7,})"

    # Search the link for the pattern
    match = re.search(pattern, link)

    if match:
        imdb_id = match.group()
        return imdb_id
    else:
        print("No valid IMDb ID found in link.")

url = 'https://www.imdb.com/'
path = "chromedriver.exe"
driver = webdriver.Chrome(path) 
#change Password to actual password. same with endpoint\

db_link = f"mysql://admin:{MYSQL_PASSWORD}@{MYSQL_HOST}:3306/netflix" 
engine = create_engine(db_link)
conn = engine.connect()

query = text('select TV from netflixTopTv10')

test = pd.read_sql_query(query,conn)
tv = test['TV'].to_list()

df_netflix_tv = pd.read_sql('netflixTopTv10', conn)
print(df_netflix_tv)

# Create a mapping between movie names and ids
tv_id_mapping = dict(zip(df_netflix_tv['TV'], df_netflix_tv['id']))

# Map the movies in your 'imdbMovie' DataFrame to their ids
nump = np.array([])

c = 1
driver.get(url)
time.sleep(5)
for show in tv:
    name = r'.+(?=:)'
    na = re.search(name,show)

    input = driver.find_element(By.XPATH, '//*[@id="suggestion-search"]')
    input.send_keys(na.group(0))
    driver.find_element(By.XPATH,'//*[@id="suggestion-search-button"]').click()
    time.sleep(3)
    driver.find_element(By.XPATH,'//*[@id="__next"]/main/div[2]/div[3]/section/div/div[1]/section[2]/div[2]/ul/li[1]/div[2]/div/a').click()
    time.sleep(3)
    
    imdb_link = driver.current_url

    imdb_id = get_imdb_id(imdb_link) 
    review_num = driver.find_element(By.XPATH,'//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[2]/div[2]/div/div[1]/a/span/div/div[2]/div[1]/span[1]').text
    description = driver.find_element(By.XPATH,'//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[3]/div[2]/div[1]/section/p/span[2]').text
    genres = driver.find_element(By.XPATH,'//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[3]/div[2]/div[1]/section/div[1]/div[2]')
    genre = genres.find_elements(By.TAG_NAME,'span')
    l = []
    for g in genre:
        l.append(g.text)
    s = "/".join(l)


    time.sleep(3)
    driver.find_element(By.XPATH,'//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[3]/div[1]/div[1]/div/a/div').click()
    time.sleep(3)
    img = driver.find_element(By.XPATH,'//*[@id="__next"]/main/div[2]/div[3]/div[4]/img')
    imgUrl = img.get_attribute('src')

    driver.find_element(By.XPATH,'//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/a').click()
    time.sleep(3)    
    print(type(review_num))
    print(float(review_num))



    if c == 1:
       nump = np.hstack((nump,np.array([show,review_num,description,s,imgUrl,imdb_id]))) 
       c += 1
    else:
        nump = np.vstack((nump,np.array([show,review_num,description,s,imgUrl,imdb_id])))
        c += 1
    print(type(review_num))
    print(float(review_num))



driver.quit
df = pd.DataFrame(nump,columns = ['TV','rating','summary','genres','imgUrl','imdb_id'])
df = df.astype({"TV":'category', "rating":'string','summary':'string','genres':'string','imgUrl':'string','imdb_id':'string'})
df['rating'] = df.rating.str.strip()
df['rating'] = pd.to_numeric(df['rating'])

df['fk_id'] = df['TV'].map(tv_id_mapping)
df['fk_id'] = df['fk_id'].cat.add_categories(-1)
df['fk_id'] = df['fk_id'].fillna(-1)
df['fk_id'] = df['fk_id'].astype('int')


df.index.names = ['rank']
df.index = df.index + 1

print(df)
df.to_sql('imdbTV', con=engine, if_exists='replace')

metadata = MetaData()
with engine.connect() as connection:
    netflixTopMovie10 = Table('imdbTV', metadata, autoload_with=engine)
    query = DDL('ALTER TABLE imdbTV ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY')
    connection.execute(query)
driver.quit()

driver.quit()
