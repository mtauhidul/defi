import { BaseLayout } from '@saltswap/uikit'
import React from 'react'
import styled from 'styled-components'
import PastDrawsHistoryCard from './components/PastDrawsHistory/PastDrawsHistoryCard'
import PastLotteryRoundViewer from './components/PastLotteryRoundViewer'

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const SecondCardColumnWrapper = styled.div<{ isAWin?: boolean }>`
  display: flex;
  flex-direction: column;
`

const BunnyImageWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
`

const PastDrawsPage: React.FC = () => (
  <Cards>
    <PastLotteryRoundViewer />
    <SecondCardColumnWrapper>
      <PastDrawsHistoryCard />
    </SecondCardColumnWrapper>
  </Cards>
)

export default PastDrawsPage
