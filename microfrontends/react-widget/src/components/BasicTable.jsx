import * as React from 'react';

export function BasicTable({ users }) {
  return (
    <div className="overflow-x-auto mb-12">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row) => (
            <tr
              key={row.id}
            >
              <th>{row.id}</th>
              <th>
                {row.firstName}
              </th>
              <th>{row.lastName}</th>
              <th>{row.age}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
