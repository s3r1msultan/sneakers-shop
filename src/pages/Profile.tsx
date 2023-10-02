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
      </div>
    </main>
  );
}
