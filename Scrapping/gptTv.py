import numpy as np
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from sqlalchemy import create_engine
import time
from selenium.webdriver.common.keys import Keys
import urllib.request as request
import openai
import re
from string import punctuation


def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]
def similar_shows(s):
    list = s.split()

    if 'Similar' in list[:2]:
        p = r'.+(?<=include)'
        n = re.sub(p,'',s)
        p = r'(?<=,\s)and'
        new = re.sub(p,'',n)
        p = r'(.+?)(?:,|$)'
        cleaned = re.findall(p,new)
        return cleaned
    elif 'Other' in list[:2]:
        p = r'.+(?<=like)'
        n = re.sub(p,'',s)
        p = r'(?<=,\s)and'
        new = re.sub(p,'',n)
        p = r'(.+?)(?:,|$)'
        cleaned = re.findall(p,new)
        return cleaned
    
    elif bool(re.search(',',s)):
        p = r'(?<=,\s)and'
        new = re.sub(p,'',s)
        p = r'(.+?)(?:,|$)'
        cleaned = re.findall(p,new)
        return cleaned
    else:
        cleaned = [s]
        return cleaned

def rating(s):
    p = r'\d(\.\d)?(?=\/)'
    new = re.search(p,s)
    return new.group(0)    

openai.api_key = "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"
engine = create_engine("mysql://admin:eBvB6C5DsTKhvH3@dashboard.clp7thkncvuh.us-east-2.rds.amazonaws.com:3306/netflix")
df = pd.read_sql_query('select * from audienceReviewsTv',engine)
columns = df.columns.to_list()[1:]
df2 = pd.DataFrame(columns= ["TV","userOpinion","similarShows","typeOfViewer","rating"])
for show in columns:



    # query = 'select {} from audienceReviewsTv'.format(show)
    # Queen Charlotte: A Bridgerton Story: Series
    # df1 = pd.read_sql_query('select ',engine)
    reviews = df[show].dropna().to_list()
    text1= " || ".join(reviews[:15])
    #print(text1)
    print(show)
    print()
# # print(text)

# text2 = f"""
# this show is so good cant believe people are hating on it

# """

    prompt = f"""

    # I will be giving you some audience reviews of a show named {show}.
    # Each audience review is separated by ||.
    # An example of the format would be audience review || audience review.....|| audience review.

    # Your task is to perform the following actions: 
    # 1 - generalize what the users are saying about the show
    # 2 - provide names of shows related to this show
    # 3 - tell me who would like this show based on audience reviews
    # 4 - after generalizing users reviews, rate this show out of 10.Based this number off of the user reviews. \
    #     Higher numbers means good. Lower numbers means bad. \
    #     



    # Use the following format:
    # user opinion: <what are users saying about the show>
    # similar shows: <only a list of similar shows. each show should be separated by commas. Do not give a sentence, just a list>
    # type of viewer:<who would like this show>
    # rating: <only rating in the form of a fraction>
    # Text: <{text1}>

    # """

    response = get_completion(prompt)
    # print(response)

    p = r'(?<=:).+'

    output = re.findall(p,response)
    #print(output)
    print(similar_shows(output[3]))
    df3 = {'TV':show,'userOpinion':output[0],'similarShows':str(similar_shows(output[1])), 'typeOfViewer':output[2],'rating':rating(output[3])}
    df2 = df2.append(df3,ignore_index = True)
    print(df2)
    time.sleep(50)
    
# Read the 'netflixTopTv10' table into a DataFrame
df_netflix = pd.read_sql('netflixTopTv10', engine)
# Create a mapping between tv names and ids
tv_id_mapping = dict(zip(df_netflix['TV'], df_netflix['id']))
# Map the tv in 'gptTv' DataFrame to their ids
df2['fk_id'] = df2['TV'].map(tv_id_mapping )  
df2['fk_id'] = df2['fk_id'].astype('int')
# Start the rank from 1 & Rename the index col:
df2.index = df2.index + 1
df2.index.names = ['rank']
# insert to database
df2.to_sql('gptTV', con=engine, if_exists='replace')