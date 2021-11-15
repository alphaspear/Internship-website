export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <h4>{props.data ? props.data.paragraph : 'Loading'}</h4>
                <h4>
                  An awesome IT support partner in success of your journeys.
                </h4>
                <h4>
                  IT company Web Development Company Dehradun
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
    
  )
}