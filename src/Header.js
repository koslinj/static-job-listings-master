import React from 'react'
import remove from './images/icon-remove.svg'

const Header = ({ keywords, remkeywords, remall }) => {
  return (
    <div className='header'>
      {
        keywords.length > 0 &&
        <div className='filters-container'>
          <div className='left'>
            {keywords.map((item, id) => {
              return <div className='chosen' key={id}>
                <div className='text'>{item}</div>
                <div onClick={() => remkeywords(item)} className='rmvbtn'>
                  <img src={remove} alt="removeX"></img>
                </div>
              </div>
            })}
          </div>
          <div onClick={() => remall()} className='clearbtn'>Clear</div>
        </div>
      }
    </div>
  )
}

export default Header