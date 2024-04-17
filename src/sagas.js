import { all, call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { FETCH_DATA, FETCH_DATA1, FETCH_DATA_SUCCESS } from "./action";

async function fetchUser(){
    const res = await fetch('https://randomuser.me/api/?results=1');
    // res=[Math.random()*10]
    return await res.json();
}

// worker Saga
export function* worker(){
    const data = yield call(fetchUser)
    console.log(data,100);
    yield put(FETCH_DATA_SUCCESS(data));
}
function worker2(){
console.log("My my!!!!....");
}

// root Saga
export default function* mySaga(){
    yield all([
        // takeEvery(FETCH_DATA, worker),
        takeLatest(FETCH_DATA, worker),
        takeEvery(FETCH_DATA1, worker2),
    ]);
    // while(true){
    // yield take(FETCH_DATA)
    // yield call(worker)
    // yield take(FETCH_DATA1)
    // yield call(worker2)
}
    
    // yield takeEvery(FETCH_DATA,worker)}

