import Modal from '@UI/Modals/Modal'
import { render, screen, fireEvent } from '@utils/test-utils'
import ReactDOM from 'react-dom'

describe('modal', () => {
  const applyHandler = vi.fn()
  const cancelHandler = vi.fn()

  beforeAll(() => {
    ReactDOM.createPortal = vi.fn((element) => {
      return element
    })
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  it('has content', () => {
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    const modalContent = screen.getByText('sample content')
    expect(modalContent).toBeInTheDocument()
  })

  it('has title', () => {
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    const title = screen.getByText('sample title')
    expect(title).toBeInTheDocument()
  })

  it('cancel button clicked', () => {
    render(
      <Modal
        title="sample title"
        onApply={applyHandler}
        onCancel={cancelHandler}
      >
        <div>sample content</div>
      </Modal>
    )
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(cancelHandler).toHaveBeenCalledTimes(1)
  })

  it('apply button clicked', () => {
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    const applyButton = screen.getByText('Apply')
    fireEvent.click(applyButton)
    expect(applyHandler).toHaveBeenCalledTimes(1)
  })

  it('buttons centered', () => {
    const { container } = render(
      <Modal
        title="sample title"
        onApply={applyHandler}
        isButtonsCentered={true}
      >
        <div>sample content</div>
      </Modal>
    )
    expect(container).toMatchSnapshot()
  })

  it('heading centered', () => {
    const { container } = render(
      <Modal
        title="sample title"
        onApply={applyHandler}
        isHeadingCentered={true}
      >
        <div>sample content</div>
      </Modal>
    )
    expect(container).toMatchSnapshot()
  })
})

describe('modal in portal is', () => {
  const applyHandler = vi.fn()
  it('renders in the portal', () => {
    const root = document.createElement('div')
    root.setAttribute('id', 'modal-root')

    const body = document.querySelector('body')
    body.appendChild(root)

    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>123</div>
      </Modal>
    )
    const modalContent = screen.getByText('123')
    expect(modalContent).toBeInTheDocument()
    expect(body).toMatchSnapshot()
  })
})
