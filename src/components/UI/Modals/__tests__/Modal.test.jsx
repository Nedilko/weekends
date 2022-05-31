import Modal from '@UI/Modals/Modal'
import { render, screen, userEvent } from '@utils/test-utils'
import ReactDOM from 'react-dom'

describe('Modal', () => {
  const applyHandler = vi.fn()
  const cancelHandler = vi.fn()

  beforeAll(() => {
    ReactDOM.createPortal = vi.fn((element) => {
      return element
    })
  })

  beforeEach(() => {
    applyHandler.mockClear()
    cancelHandler.mockClear()
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  afterAll(() => {
    ReactDOM.createPortal.mockRestore()
  })

  it('should render modal content', () => {
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    expect(screen.getByText('sample content')).toBeInTheDocument()
  })

  it('should has title', () => {
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    expect(screen.getByText('sample title')).toBeInTheDocument()
  })

  it('should handle Cancel button click', async () => {
    const user = userEvent.setup()
    render(
      <Modal
        title="sample title"
        onApply={applyHandler}
        onCancel={cancelHandler}
      >
        <div>sample content</div>
      </Modal>
    )
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(cancelHandler).toHaveBeenCalledOnce()
  })

  it('should handle Apply button click', async () => {
    const user = userEvent.setup()
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    await user.click(screen.getByRole('button', { name: 'Apply' }))
    expect(applyHandler).toHaveBeenCalledOnce()
  })

  it('should center buttons', () => {
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

  it('should center heading', () => {
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

describe('Modal in portal', () => {
  const applyHandler = vi.fn()
  it('should render in the portal', () => {
    const root = document.createElement('div')
    root.setAttribute('id', 'modal-root')

    const body = document.querySelector('body')
    body.appendChild(root)

    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>content text</div>
      </Modal>
    )
    expect(screen.getByText('content text')).toBeInTheDocument()
    expect(body).toMatchSnapshot()
  })
})
