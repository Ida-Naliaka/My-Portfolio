function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }
  
  ReactDOM.render(
    <Mailto email="foo@bar.baz" subject="Hello" body="Hello world!">
      Mail me!
    </Mailto>,
    document.getElementById("root")
  );