<template>
  <div class="register">
      <section class="register-contianer">
            <div class="form-title">
                <span class="title">资金管理系统</span>
            </div>
            <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="80px" class="register-Form">
                <el-form-item label="用户名" prop="UserName">
                    <el-input v-model="registerForm.UserName"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="registerForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input v-model="registerForm.pass" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="passed">
                    <el-input v-model="registerForm.passed" type="password"></el-input>
                </el-form-item>
                <el-form-item label="选择身份">
                    <el-select v-model="registerForm.identity" placeholder="请选择身份">
                        <el-option label="管理员" value="manager"></el-option>
                        <el-option label="员工" value="employee"></el-option>
                    </el-select>
                </el-form-item>                
                <el-form-item>
                    <el-button @click="submitForm('registerForm')">注册</el-button>
                </el-form-item>
            </el-form>
      </section>
  </div>
</template>

<script>
export default {
    name: 'register',
    components: {},
    data() {
      var validatePass = (rule, value, callback) => {
        if (value !== this.registerForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            registerForm: {
                UserName: '',
                email: '',
                pass: '',
                passed: '',
                identity: ''
            },
            rules: {
                UserName: [
                    { required: true, message: '请输入用户名', trriger: 'blur' },
                    { min: 2, max: 8, message: '长度在2到8个字符', trriger: 'blur' }
                ],
                email: [
                    {
                        type: 'email',
                        required: true,
                        message: '请输入正确的邮箱',
                        trriger: 'blur'
                    }
                ],
                pass: [
                    { required: true, message: '密码不能为空', trriger: 'blur' },
                    { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
                ],
                passed: [
                    { required: true, message: '确认密码不能为空', trriger: 'blur'},
                    { validator: validatePass, trriger: 'blur'}
                ]
                
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
}
</script>

<style scoped>
.register {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(../assets/img/bgimg.jpeg) no-repeat center center;
    background-size: 100% 100%;
}
.register-contianer {
    width: 370px;
    height: 450px;
    position: absolute;
    top: 10%;
    left: 34%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 5px 10px #cccc;
}
.form-title{
    font-family: "Microsoft YaHei";
    font-weight: bold;
    font-size: 24px;
    color: #409EFF;
}
.register-Form {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
}
</style>