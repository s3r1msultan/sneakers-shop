import { Routes, Route, Link } from "react-router-dom";
export function Profile({ user }: { user: any }) {
  return (
    <main className="main">
      <div>
        <h1>Личный профиль</h1>
      </div>
      <div>
        <p>
          {user && user.surname} {user && user.firstname}, {user && user.age}{" "}
          years old
        </p>
        <a
          href="./tasks.html"
          rel="noopener noreferrer"
        >
          Tasks
        </a>
      </div>
    </main>
  );
}
