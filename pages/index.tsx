import { Fragment } from 'react';
import styled from 'styled-components';
import { users, gameGroups } from '@/lib/TestData';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Page = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Body = styled.div``;

const PredictionGroups = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length}, 1fr)`};
  grid-gap: 8px;
`;

const Group = styled.div`
  grid-column: 3;
`;

const Header = styled.div`
  font-weight: 700;
`;

const Date = styled.div``;

const Team = styled.div``;

export default function Home() {
  return (
    <Layout>
      <Page>
        <Title>Predictions</Title>
        <Body>
          <PredictionGroups length={users.length + 4}>
            {gameGroups.map((group) => (
              <Fragment key={group.name}>
                <Group>{group.name}</Group>
                {users.map((user) => (
                  <Header key={user}>{user}</Header>
                ))}
                <Header>Result</Header>

                {group.games.map((game, i) => (
                  <Fragment key={i}>
                    <Date>{i == 0 ? group.date : ''}</Date>
                    <Team>{game.blueTeam}</Team>
                    <Team>{game.redTeam}</Team>

                    {users.map((user) => (
                      <Team key={user}>
                        {game.predictions.find(({ name }) => user == name)
                          ?.team || '--'}
                      </Team>
                    ))}

                    <Team>{game.winningTeam}</Team>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </PredictionGroups>
        </Body>
      </Page>
    </Layout>
  );
}
