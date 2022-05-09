import Header from './components/header'
import emails from './data/emails'

import initialEmails from './data/emails'

import { useState } from "react";

import './styles/app.css'

function App() {
  // Use initialEmails for state
  // const [emails, setEmails] = useState(initialEmails);
  const [tab, setTab] = useState('inbox')
  const [checked, setChecked] = useState(false)

  console.log(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className= {tab === 'inbox' ? 'item active' : 'item'}
            onClick={() => setTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{emails.length}</span>
          </li>
          <li
            className={tab === 'starred' ? "item active" : "item"}
            onClick={() => setTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{/* Render a list of emails here */}
      <ul className=''>
        {emails.map((email, index) => (
          <li key = {index} className= 'email unread'>
            {/* checkbox */}
            <div className='select'>
            <input type="checkbox" className='select-checkbox'/>
            </div>
            {/* star */}
            <div className='star'>
              <input type='checkbox'className='star-checkbox'/>
            </div>
            {/* recipient */}
            <div className='sender'>{email.sender}</div>
            {/* email preview */}
            <div className='title'>{email.title}</div>
          </li>
        ))}
      </ul>
      </main>
    </div>
  )
}

export default App
