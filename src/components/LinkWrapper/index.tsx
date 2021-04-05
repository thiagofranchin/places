import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <S.LinkWrapperWrapper>
      <Link href={href}>{children}</Link>
    </S.LinkWrapperWrapper>
  )
}

export default LinkWrapper
