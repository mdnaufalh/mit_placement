import * as React from "react";

export default function () {
  return (
    <div>
      <div style={styles.bar} />
      <div style={styles.bar} />
      <div style={styles.bar} />
    </div>
  );
}

const styles = {
  bar: { width: 35, height: 5, backgroundColor: "black", margin: 6 },
};
