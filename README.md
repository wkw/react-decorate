# react-decorate

Composable, efficient, stateful decorators for React.

```javascript
// MyComponent.js
import { compose, partial, field } from 'react-decorate'

const MyComponent = ({count, partial, setCount}) => (
  <button onClick={partial(setCount, count)}>
    {count} clicks
  </button>
)

export default compose(
  field('count', 'setCount')
  partial,
)(MyComponent)
```
