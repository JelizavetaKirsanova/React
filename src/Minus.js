export default function Minus(props) {
    return (
      <div>
        <h2>{props.children}</h2>
        <p>{props.a - props.b}</p>
      </div>
    );
  }
  