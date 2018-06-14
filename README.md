# fieldsback

The efficient feedback system

## Purpose

Feedback system based in the feedback quality: the best feedbacks are more likely to win the final prize.

## Getting Started

Do you have <strong>git</strong>, <strong>node/npm</strong> and <strong>mongodb</strong> in your computer? We'll need them! ;)

<strong>Make sure these programs work correctly on your command line.</strong>

### Install

<pre>
git clone https://github.com/gabrielrufino/fieldsback
cd fieldsback
npm install
</pre>

### Start MongoDB

You need enable the MongoDB service to work correctly

<strong>Linux:</strong>
<pre>
$ sudo service mongod start
</pre>

<strong>Windows:</strong>
<pre>
> start mongod
</pre>

### Run fieldsback!

<pre>
npm start
</pre>

And now, you can access the application  in http://localhost:3000

## Config .env

You can change some environment variables in the .env file.

<ul>
  <li>DATABASE</li>
  <li>PORT</li>
</ul>

## Feedback structure

<pre>
{
  "_id": ObjectId("5b22c9b8232b331e481cf27f"),
  "sendDate": ISODate("2018-06-14T20:02:00.308Z"),
  "checked": true,
  "ranking": 64,
  "name": "Gabriel Rufino",
  "email": "contato@gabrielrfuino.com",
  "rating": 4,
  "message": "Lorem Ipsum ... ",
  "__v": 0
}
</pre>
