import { defineAction } from 'redux-define'

export const LOAD = defineAction('LOAD', ['PENDING', 'SUCCESS', 'ERROR'], 'dreamboxes')
export const ADD = defineAction('ADD', ['PENDING', 'SUCCESS', 'ERROR'], 'dreamboxes')
export const SELECT_TITLE = 'dreamboxes/SELECT_TITLE'
