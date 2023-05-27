export default function Division(props) {
    return (
      <div>
        <h2>{props.children}</h2>
        <p>{props.a / props.b}</p>
      </div>
    );
  }
  