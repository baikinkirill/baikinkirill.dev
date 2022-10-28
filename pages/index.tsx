import React, { Fragment, ReactElement, useEffect } from 'react'
import getSeo from '../services/getSeo'
import styles from '../styles/index.module.scss'
import { MainPage } from '../types/types'
import { NextPageContext } from 'next'
import Image from 'next/image'
import tippy from 'tippy.js'

export default function Index (props: MainPage): React.ReactNode {
  const { isVPN } = props
  return (
  <div className={styles.parent}>
   {getSeo('Hi there', '')}
   <div data-text='baikinkirill.dev' className={styles.glitch}>
    <a href='https://github.com/baikinkirill'>baikinkirill.dev</a>
   </div>
   <span>With ❤ to <a target={'_blank'} rel={'noreferrer'} href='https://laptev.dev'>laptev.dev</a></span>
   <ShowVPNIcon show={isVPN} />
  </div>
  )
}

function ShowVPNIcon (props: { show: boolean }): ReactElement {
  if (!props.show) {
    return (
   <Fragment key={'vpnIcon'} />
    )
  }

  useEffect(() => {
    tippy('#iconContainer', {
      content: 'VPN detected. Your connection is secure.',
      animation: 'perspective-subtle',
      placement: 'bottom'
    })
  }, [])

  return (
  <Fragment key={'vpnIcon'}>
   <div className={styles.vpnLogo}>
    <Image id={'iconContainer'} width={'45px'} height={'45px'} src='/vpn.png' alt='' />
   </div>
  </Fragment>
  )
}

export function getServerSideProps ({ req }: NextPageContext): { props: MainPage } {
  let isVPN = false
  if (req != null) {
    const ip = req.headers['x-forwarded-for'] ?? req.connection.remoteAddress
    isVPN = ip?.includes(process?.env?.NEXT_APP_VPN_HOST ??
   'something_long_string') ?? false
  }
  return {
    props: {
      isVPN
    }
  }
}
