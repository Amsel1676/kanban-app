import React from 'react'
import { render } from "@testing-library/react"
import KbnLoginForm from "./KbnLoginForm"

describe('KbnLoginForm', () => {
    describe('レイアウト確認', () => {
        describe('Email_Form', () => {
            test('Email_Formが存在していること', () => {
                const { getByLabelText } = render(<KbnLoginForm />)
                expect(getByLabelText('Email:')).toBeTruthy()
            })
        })
        describe('Password_Form', () => {
            test('Password_Formが存在していること', () => {
                const { getByLabelText } = render(<KbnLoginForm />)
                expect(getByLabelText('Password:')).toBeTruthy()
            })
        })
    })
})