'use client';

import { Team } from '@/types';
import Image from 'next/image';
import { Fragment } from 'react';
import styled from 'styled-components';
import { DeleteTeamButton } from './delete-team-form';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const TableHeader = styled.div`
  font-weight: bold;
`;

const StyledImage = styled(Image)<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const Color = styled.div<{ $color: string; $backgroundColor: string }>`
  font-weight: bold;
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export function TeamsTable({ teams }: { teams: Team[] }) {
  return (
    <Grid>
      <TableHeader>Name</TableHeader>
      <TableHeader>Abbr</TableHeader>
      <TableHeader>Logo</TableHeader>
      <TableHeader>Primary</TableHeader>
      <TableHeader>Secondary</TableHeader>
      <TableHeader></TableHeader>
      {teams.map((team) => (
        <Fragment key={team.id}>
          <div>{team.name}</div>
          <div>{team.abbreviation}</div>
          <StyledImage
            src={team.logo_url}
            alt='Logo'
            width={50}
            height={50}
            $backgroundColor={team.secondary_color}
          />
          <Color
            $color={team.primary_color}
            $backgroundColor={team.secondary_color}
          >
            {team.primary_color}
          </Color>
          <Color
            $color={team.secondary_color}
            $backgroundColor={team.primary_color}
          >
            {team.secondary_color}
          </Color>
          <DeleteTeamButton id={team.id} />
        </Fragment>
      ))}
    </Grid>
  );
}
