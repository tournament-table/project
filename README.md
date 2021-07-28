.tab-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px rgb(67, 125, 212);
  flex-direction: row;
}

.tournament-menu {
  background-color: rgb(228, 228, 228);
  border-radius: 50px;
  height: 80vh;
  width: 90vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
}

      <tr>
        <td>
          <span style={{ fontWeight: "bold" }}>{element.rank}</span>
        </td>
        <td>
          <span>
            <img src={logo} className="logoIcons" alt="club" />
          </span>
        </td>
        <td>
          <span style={{ marginLeft: "20px", fontWeight: "bold" }}>
            {element.teamName}
          </span>
        </td>
        <td>
          <span style={{ marginLeft: "700px" }}>{element.matchesPlayed}</span>
        </td>
        <td>
          <span>{element.matchesWon}</span>
        </td>
        <td>
          <span>{element.matchesDraw}</span>
        </td>
        <td>
          <span>{element.matchesLost}</span>
        </td>
        <td>
          <span>
            {element.goalsScored} - {element.goalsConceded}
          </span>
        </td>
        <td>
          <span>{element.points}</span>
        </td>
        <td>{a()}</td>
      </tr>
