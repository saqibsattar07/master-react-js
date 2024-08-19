export const LeranInlineCSS = () => {
  const btnStyle = {
    backgroundColor: "orange",
    color: "blue",
  };

  return (
    <>
      <p style={{ fontSize: "20px", color: "red" }}>
        Hello React + Vite + Saqib Sattar
      </p>
      <button style={btnStyle}>Click Me</button>
      <br />
      <br />
      <button style={{ ...btnStyle, ...{ fontSize: "20px" } }}>Button</button>
    </>
  );
};
