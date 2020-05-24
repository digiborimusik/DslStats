// const fetch = require('node-fetch');

const nodeFetch = require('node-fetch')
const tough = require('tough-cookie')
const fetchCookie = require('fetch-cookie')
const fetch = fetchCookie(nodeFetch, new tough.CookieJar())

// const body = { UserName: 'vvitriv', UserPassword: 'Qwer5151' };

login = () => {
    return new Promise((resolve, reject) => {
        fetch('https://ffm.ukrtelecom.net/ServiceModel/AuthService.svc/Login', {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.Code) {
                    reject(json.Message)
                    throw '0'
                }
                resolve('authentifycado');
            })
            .catch(err => reject(err))
    })
}


load = () => {
    return new Promise((resolve, reject) => {

        fetch("https://ffm.ukrtelecom.net/0/ServiceModel/EntityDataService.svc/ActivityCollection?$filter=Owner/TsiLogin%20eq%20'" + 'vvitriv' + "'&$orderby=CreatedOn%20desc&$top=5" + "&$select=Title,StatusId,OwnerId,CreatedOn,Id,ModifiedOn,TsiSymptoms,TsiAddress,TsiDescription,TsiTaskCategoryId,TsiResponsibilityAreaId,TsiResCategoryId", {
            method: 'get',
            headers: { "Content-Type": "application/json;odata=verbose", "Accept": "application/json;odata=verbose" },
        })
            .then(res => {
                console.log(res.headers)
                return res
            })
            .then(res => res.json())
            .then(json => console.log(json));
    })
}

const body = { Username: 'admisn', Password: 'admin' };

fetch('http://192.168.1.100/index/login.cgi', {
    method: 'post',
    body: 'Username=admin&Password=OGM2OTc2ZTViNTQxMDQxNWJkZTkwOGJkNGRlZTE1ZGZiMTY3YTljODczZmM0YmI4YTgxZjZmMmFiNDQ4YTkxOA%3D%3D',
    headers: { "Cookie": 'Language=ru; FirstMenu=Admin_0; SecondMenu=Admin_0_0; ThirdMenu=Admin_0_0_0;'  }
    })
    .then(res => res.headers)
    .then(json => console.log(json))
    .then(() => {
        return fetch('http://192.168.1.100/html/status/dslinfo.asp', {method: 'get'})
    })
    .then(res => res.text())
    .then(json => console.log(json))
    .catch(err => console.log(err))

export default load