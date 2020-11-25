import React from 'react'
import { render } from "@testing-library/react"
import App from "./App"

describe('KbnButton', () => {
    describe('プロパティ', () => {
        describe('type', () => {
            describe('デフォルト', () => {
                test('button要素であること', () => {
                    const { getByRole } = render(<App />)
                    expect(getByRole('button')).toBeInTheDocument()
                })
            })
        })
    })
})