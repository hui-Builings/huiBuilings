#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/2/28 上午11:09
# @Author  : Lee才晓
# @File    : test.py
# @Function: 

import flask
from flask import jsonify

test = flask.Blueprint(
    'test',
    __name__,
    url_prefix='/test'
)


@test.route('/get_test', methods=['GET'])
def get_github_trend():
    return jsonify(
        message='OK',
        data='123'
    )