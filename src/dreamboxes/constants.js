import { defineAction } from 'redux-define'

export const LOAD = defineAction('LOAD', ['PENDING', 'SUCCESS', 'ERROR'], 'dreamboxex')
export const ADD = defineAction('ADD', ['PENDING', 'SUCCESS', 'ERROR'], 'dreamboxex')
