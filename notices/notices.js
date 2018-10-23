// fs.readFileSync is inlined by browserify transform "brfs"
const fs = require('fs')
const path = require('path')

module.exports = [
  {
    id: 0,
    read: true,
    date: 'Thu Feb 09 2017',
    title: 'Terms of Use',
    body: fs.readFileSync(path.join(__dirname, '/archive', 'notice_0.md'), 'utf8'),
  },
  {
    id: 2,
    read: true,
    date: 'Mon May 08 2017',
    title: 'Privacy Notice',
    body: fs.readFileSync(path.join(__dirname, '/archive', 'notice_2.md'), 'utf8'),
  },
  {
    id: 3,
    read: true,
    date: 'Tue Nov 28 2017',
    title: 'Seed Phrase Alert',
    firstVersion: '<=3.12.0',
    body: fs.readFileSync(path.join(__dirname, '/archive', 'notice_3.md'), 'utf8'),
  },
  {
    id: 4,
    read: true,
    date: 'Wed Jun 13 2018',
    title: 'Phishing Warning',
    body: fs.readFileSync(path.join(__dirname, '/archive', 'notice_4.md'), 'utf8'),
  },
]
