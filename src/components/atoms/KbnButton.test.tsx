import React from 'react'
import { render } from "@testing-library/react"
import KbnButton from "./KbnButton"

describe('KbnButton', () => {
    describe('プロパティ', () => {
        describe('type', () => {
            describe('デフォルト', () => {
                test('class名がkbn-buttonのbutton要素であること', () => {
                    const { getByRole, container } = render(<KbnButton />)
                    expect(getByRole('button')).toBeInTheDocument()
                    expect(container.firstChild).toHaveClass('kbn-button')
                })
            })

            describe('type=text', () => {
                test('class名がkbn-button-textのbutton要素であること', () => {
                    const { getByRole, container } = render(<KbnButton type="text" />)
                    expect(getByRole('button')).toBeInTheDocument()
                    expect(container.firstChild).toHaveClass('kbn-button-text')
                })
            })
        })
        describe('disabled', () => {
            describe('デフォルト', () => {
                test('disableのデフォルト値がfalseであること', () => {
                    const { getByRole } = render(<KbnButton />)
                    expect(getByRole('button')).not.toBeDisabled()
                })
            })

            describe('disabled=false', () => {
                test('disabledがtrueのボタンであること', () => {
                    const { getByRole } = render(<KbnButton disabled={false} />)
                    expect(getByRole('button')).not.toBeDisabled()
                })
            })

            describe('disabled=true', () => {
                test('disabledがtrueのボタンであること', () => {
                    const { getByRole } = render(<KbnButton disabled={true} />)
                    expect(getByRole('button')).toBeDisabled()
                })
            })
        })
        describe('value', () => {
            describe('デフォルト', () => {
                test('buttonのテキストが空白であること', () => {
                    const { getByRole } = render(<KbnButton />)
                    expect(getByRole('button')).toHaveTextContent('')
                })
            })

            describe('value=test', () => {
                test('buttonのテキストがtestであること', () => {
                    const { getByRole } = render(<KbnButton value='test' />)
                    expect(getByRole('button')).toHaveTextContent('test')
                })
            })
        })
    })
})