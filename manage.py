#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/2/28 上午10:58
# @Author  : Lee才晓
# @File    : manage.py
# @Function: 

from flask_script import Manager, Server

from server.app import create_app

app = create_app
manager = Manager(app)
manager.add_command('runserver', Server(host='127.0.0.1', port=2345))

if __name__ == '__main__':
    manager.run()


