import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1,
	showScroll: false
});

export default (state = defaultState,action)=> {
    switch(action.type){
           
        default:
            return state;
    }
    
}