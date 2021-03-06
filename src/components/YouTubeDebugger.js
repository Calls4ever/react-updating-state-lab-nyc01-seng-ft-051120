import React from 'react'

class YouTubeDebugger extends React.Component{
    state={
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
      bitrateHandler=()=>{
          this.setState({settings: {...this.state.settings, bitrate: 12}})
      }
      resolutionHandler=()=>{
          this.setState({settings: { ...this.state.settings, video:{...this.state.settings.video, resolution: '720p'}}})
      }
    render(){
        return(
            <div>
                <button className='bitrate'onClick={this.bitrateHandler}>Tsering</button>
                <button className='resolution' onClick={this.resolutionHandler}>Norbu</button>
            </div>
        
        )
    }
}
export default YouTubeDebugger