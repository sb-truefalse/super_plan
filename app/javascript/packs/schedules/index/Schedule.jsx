import React from 'react'
import ScheduleLink from './ScheduleLink'

class Schedule extends React.Component {
  render() {
    const data = this.props.data
    return(
      <div>
        <div className="card-body text-center">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          { data.links.map((link, i) => {
            return(
              <ScheduleLink link={link} key={i}/>
            )
          })}
        </div>

        <div className="card-footer text-muted text-center">
          <svg className="bi bi-arrow-clockwise" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3.17 6.706a5 5 0 017.103-3.16.5.5 0 10.454-.892A6 6 0 1013.455 5.5a.5.5 0 00-.91.417 5 5 0 11-9.375.789z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M8.147.146a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.707-.708L10.293 3 8.147.854a.5.5 0 010-.708z" clipRule="evenodd"/>
          </svg>
          {data.last_occupation_updated_at}
        </div>
      </div>
    )
  }
}

export default Schedule
