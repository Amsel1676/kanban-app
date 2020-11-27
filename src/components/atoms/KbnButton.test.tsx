import React from 'react'
import { render } from "@testing-library/react"
import KbnButton from "./KbnButton"
import { debug } from 'console'

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
    })
})