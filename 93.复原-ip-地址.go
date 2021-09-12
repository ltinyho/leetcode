/*
 * @lc app=leetcode.cn id=93 lang=golang
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
func restoreIpAddresses(s string) []string {
	var res []string
	backtrack(s, &res, 0, []string{})
	return res
}

func backtrack(s string, res *[]string, startIdx int, path []string) {
	if startIdx == len(s) && len(path) == 4 {
		*res = append(*res, strings.Join(path, "."))
		return
	}

	for i := startIdx; i < len(s);  i++ {
		path := append(path, s[startIdx:i+1])
		if i-startIdx+1<=3&&len(path)<=4&&isNormalIp(s,startIdx,i){
			backtrack(s,res,i+1,path)
		}else{
			return 
		}
		path=path[:len(path)-1]
	}
}

func isNormalIp(s string, sta, end int) bool {
	checkInt,_ :=strconv.Atoi(s[sta:end+1])
	// 前导 0 不合法
	if end-sta > 0 && s[sta] == '0' {
		return false
	}
	if checkInt > 255{
		return false
	}
	return true
}
alias proxy="export https_proxy=http://192.168.3.100:7891;export http_proxy=http://192.168.3.100:7891;export all_proxy=socks5://192.168.3.100:7890"

alias unproxy="unset http_proxy='';unset https_proxy='';"
// @lc code=end