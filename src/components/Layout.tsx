import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <header>
        <div style={{ width: '100%', height: 200, backgroundColor: 'blue' }}>
          {children}
        </div>
      </header>
    </>
  )
}