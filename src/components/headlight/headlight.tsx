import './headlight.less'
function Headlight({title}:{title:string}){
  return(
    <div>
      <h2 className="headlight">{title}</h2>
    </div>
  )
}
export default Headlight;