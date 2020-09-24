import React, {useEffect} from 'react'
import {useFetch} from '../../hooks/use-fetch';

const API_USERS = "http://localhost:4000/users.json";

export default function UserList() {

  const {isLoading, response, error, doFetch} = 
      useFetch(API_USERS);

  useEffect(() => {
    doFetch({
      method: "get"
    })

  }, [])

  return (
    <div className="container">
      {error && JSON.stringify(error)}
      {/* { response && JSON.stringify(response)} */}
      <h4>ALL USERS</h4>
      {
        response && response.map(user => {
          return (
            <div className="card">
              <div className="card-body">
                  <p>{user.full_name}</p>
                  <p>{user.phone}</p>
                  <p>{user.email}</p>
                  <p>{user.date_of_birth}</p>
                  <p>{user.country}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
