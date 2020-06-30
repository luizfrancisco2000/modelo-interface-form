import {InputTextBuilder, InputText} from '../Elements/InputText'
import {TextAreaBuilder, TextArea} from '../Elements/TextArea'
import {CheckBoxBuilder, CheckBox} from '../Elements/CheckBox'
import {RadioBuilder, Radio} from '../Elements/Radio'
import {ComboBoxBuilder, ComboBox} from '../Elements/ComboBox'
import {EmailInputBuilder, EmailInput} from '../Elements/EmailInput'
import {TelInputBuilder, TelInput} from '../Elements/Tel'
import {FileInputBuilder, FileInput} from '../Elements/File'
import {DateInputBuilder, DateInput} from '../Elements/Date'

const elements = [
    InputTextBuilder,
    TextAreaBuilder,
    RadioBuilder,
    CheckBoxBuilder,
    ComboBoxBuilder,
    EmailInputBuilder,
    TelInputBuilder,
    FileInputBuilder,
    DateInputBuilder
]

const elementsForm = {
    inputText:InputTextBuilder,
    textArea:TextAreaBuilder,
    Radio:RadioBuilder,
    CheckBox:CheckBoxBuilder,
    ComboBox:ComboBoxBuilder,
    EmailInput:EmailInputBuilder,
    tel:TelInputBuilder,
    File:FileInputBuilder,
    Date:DateInputBuilder
}

const elementsView = {
    inputText:InputText,
    textArea:TextArea,
    Radio:Radio,
    CheckBox:CheckBox,
    ComboBox:ComboBox,
    EmailInput:EmailInput,
    tel:TelInput,
    File:FileInput,
    Date:DateInput
}

const types = ['inputText', 'textArea', 'Radio', 'CheckBox', 'ComboBox','EmailInput','tel','File','Date']

export {types, elementsForm}
export {elementsView}
export default elements 