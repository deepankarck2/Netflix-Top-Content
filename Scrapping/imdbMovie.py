import numpy as np
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from sqlalchemy import create_engine
import time


url = 'https://www.imdb.com/'
path = "chromedriver.exe"
driver = webdriver.Chrome(path) 
#change Password to actual password. same with endpoint
engine = create_engine("mysql://admin:Password@endpoint:3306/netflix")
test = pd.read_sql_query('select Movie from netflixTopMovie10',engine)
movies = test['Movie'].to_list()
nump = np.array([])

c = 1
driver.get(url)
time.sleep(12)

for movie in movies:
 

    input = driver.find_element(By.XPATH, '//*[@id="suggestion-search"]')
    input.send_keys(movie)
    driver.find_element(By.XPATH,'//*[@id="suggestion-search-button"]').click()
    time.sleep(3)
    driver.find_element(By.XPATH,'//*[@id="__next"]/main/div[2]/div[3]/section/div/div[1]/section[2]/div[2]/ul/li[1]/div[2]/div/a').click()
    time.sleep(3)
    
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
    time.sleep(5)
    img = driver.find_element(By.XPATH,'//*[@id="__next"]/main/div[2]/div[3]/div[4]/img')
    imgUrl = img.get_attribute('src')

    driver.find_element(By.XPATH,'//*[@id="__next"]/main/div[2]/div[2]/div/div[1]/a').click()
    time.sleep(3)    
    print(type(review_num))
    print(float(review_num))



    if c == 1:
       nump = np.hstack((nump,np.array([movie,review_num,description,s,imgUrl]))) 
       c += 1
    else:
        nump = np.vstack((nump,np.array([movie,review_num,description,s,imgUrl])))
        c += 1

driver.quit
df = pd.DataFrame(nump,columns = ['Movie','rating','summary','genres','imgUrl'])
df = df.astype({"Movie":'category', "rating":'string','summary':'string','genres':'string','imgUrl':'string'})
df['rating'] = df.rating.str.strip()
df['rating'] = pd.to_numeric(df['rating'])

print(df)
df.index.names = ['rank']
df.to_sql('imdbMovie', con=engine, if_exists='replace')
engine.execute('alter table imdbMovie add id int primary key auto_increment')

driver.quit()