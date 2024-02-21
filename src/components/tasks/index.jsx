export function Task(props){
  return(
    // eslint-disable-next-line react/prop-types
    <p>{props.task.id} {props.task.title}</p>
  )
}