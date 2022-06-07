import Modal from '@UI/Modals/Modal'
import { render, screen, userEvent } from '@utils/test-utils'

describe('Modal', () => {
  const applyHandler = jest.fn()
  const cancelHandler = jest.fn()

  beforeEach(() => {
    applyHandler.mockClear()
    cancelHandler.mockClear()
  })

  it('should render modal content', () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    expect(screen.getByText('sample content')).toBeInTheDocument()
    document.body.removeChild(modalRoot)
  })

  it('should has title', () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    expect(screen.getByText('sample title')).toBeInTheDocument()
    document.body.removeChild(modalRoot)
  })

  it('should handle Cancel button click', async () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
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
    expect(cancelHandler).toHaveBeenCalledTimes(1)
    document.body.removeChild(modalRoot)
  })

  it('should handle Apply button click', async () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
    const user = userEvent.setup()
    render(
      <Modal title="sample title" onApply={applyHandler}>
        <div>sample content</div>
      </Modal>
    )
    await user.click(screen.getByRole('button', { name: 'Apply' }))
    expect(applyHandler).toHaveBeenCalledTimes(1)
    document.body.removeChild(modalRoot)
  })

  it('should center buttons', () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
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
    document.body.removeChild(modalRoot)
  })

  it('should center heading', () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
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
    document.body.removeChild(modalRoot)
  })
})
