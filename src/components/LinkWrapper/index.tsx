import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <S.LinkWrapper>
      <Link href={href}>{children}</Link>
    </S.LinkWrapper>
  )
}

export default LinkWrapper
