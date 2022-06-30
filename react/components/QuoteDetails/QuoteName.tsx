import { Input } from 'vtex.styleguide'
import React from 'react'
import { useIntl } from 'react-intl'

import { quoteMessages } from '../../utils/messages'

const QuoteName = ({ isNewQuote, quoteState, formState, onChange }: any) => {
  const { formatMessage } = useIntl()

  return isNewQuote ? (
    <div className="w-50-l mb5">
      <Input
        size="large"
        placeholder={formatMessage(quoteMessages.placeholderName)}
        dataAttributes={{
          'hj-white-list': true,
          test: 'string',
        }}
        label={formatMessage(quoteMessages.labelName)}
        value={quoteState.referenceName}
        errorMessage={formState.errorMessage}
        onChange={onChange}
      />
    </div>
  ) : (
    <h3 className="t-heading-3 mb8">{quoteState.referenceName}</h3>
  )
}

export default QuoteName
