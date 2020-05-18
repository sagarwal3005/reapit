import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { ReduxState } from '@/types/core'
import Routes from '@/constants/routes'
import { Button, Level } from '@reapit/elements'
import connectImage from '@/assets/images/reapit-connect.png'

import { Container, Wrapper, ImageContainer } from './__styles__/login'

import { redirectToLogin } from '@reapit/cognito-auth'

import logoImage from '@/assets/images/reapit-graphic.jpg'

export interface LoginProps {
  hasSession: boolean
}

const loginHandler = () => redirectToLogin(window.reapit.config.cognitoClientId, `${window.location.origin}`)

export const Login: React.FunctionComponent<LoginProps> = (props: LoginProps) => {
  const { hasSession } = props

  if (hasSession) {
    return <Redirect to={Routes.HOME} />
  }

  return (
    <Container>
      <Wrapper>
        <Level>
          <img src={connectImage} alt="Reapit Connect Graphic" />
        </Level>
        <p className="pb-8">Welcome to gazeal</p>
        <Level>
          <Button type="button" onClick={loginHandler} loading={false} variant="primary" disabled={false} fullWidth>
            Login
          </Button>
        </Level>
      </Wrapper>

      <ImageContainer>
        <img src={logoImage} alt="Reapit Graphic" />
      </ImageContainer>
    </Container>
  )
}

export const mapStateToProps = (state: ReduxState): LoginProps => ({
  hasSession: !!state.auth.loginSession || !!state.auth.refreshSession,
})

export default withRouter(connect(mapStateToProps, {})(Login))
