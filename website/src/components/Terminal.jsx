import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

export default function AppTerminal() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: "#111827",
        foreground: "#f8fafc",
      },
    });

    const fitAddon = new FitAddon();

    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    term.writeln("Sandbox CodeX");
    term.writeln("----------------------------");
    term.writeln("$ npm run dev");
    term.writeln("Ready.");
    term.write("$ ");

    window.addEventListener("resize", () => fitAddon.fit());

    return () => term.dispose();
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        height: "100%",
        width: "100%",
        padding: "10px",
      }}
    />
  );
}
